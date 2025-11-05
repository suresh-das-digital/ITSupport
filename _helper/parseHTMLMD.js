import { writeFileSync } from 'node:fs'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'

// import pre from './pre/pre.js'

const BASE_MD_PATH = '../lib'
const DATA_PATH = '/home/null/.ext/freelancing/l4rg/_project/data/data'
const META_PATH = `${DATA_PATH}/meta`
const SCHEMA_PATH = `${DATA_PATH}/schema`
const BASE_URL = 'itsupport.net.in'

async function readMetaDir(dir, res = '') {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = `${dir}/${file}`
    console.log('...', filePath)
    const fileStat = await stat(filePath)
    if (fileStat.isDirectory()) {
      res += `${await readMetaDir(filePath)}`
      // return res;
    } else {
      console.log('>>', filePath)
      const fileData = await readFile(filePath)
      res += `${fileData}\n\n\n`
      // return res;
    }
  }
  return res;
}

async function readHTMLFile(dir) {
  // const file = ``
  const file = await readMetaDir(dir);
  // console.log(file);
  await writeFile(`${dir.split('/').slice(-1)[0]}test.html`, file)
  // process.exit()
  // const dirs = await readdir(META_PATH)
  // const data = (await readFile(HTML_PATH)).toString();
  // return data;
  return file;
}

const finalData = {

}
let data = {}

const state = {
  path: undefined,
  currentTag: '',
  data: {},
  schema: '',
}

function resetState() {
  state.path = undefined
  state.data = {}
  state.currentTag = ''
  state.schema = ''
}

function startData(path) {
  resetState();
  state.path = path
  state.schema = ''
}

function getTypeSlugFromURL(url) {
  console.log('URL', url)
  const type = url.split('/')[3].replace(/-/g, '')
  const slug = '/' + (url.split('/').slice(4).join('/') || '')
  return {type, slug}
}

function endData() {
  // console.log('CURRENT', state)
  if (!state.path) {
    console.log('NO DATA TO END');
    resetState();
    return;
  }
  const path = state.data['openGraph']['url'];
  const {type, slug} = getTypeSlugFromURL(path);
  console.log('TITLE<', state.data['title'], '|||', type, '|', slug, "\n")
  // console.log('->', type, slug);
  const file = `${BASE_MD_PATH}/${type}Meta.ts`
  // console.log('END', {type, slug, file, path})
  
  if (!data[type]) data[type] = {}
  if (!data[type][slug]) data[type][slug] = {}

  data[type][slug] = state.data;
  saveSchema(type, slug);
  resetState();
}

function parseTextLine(line) {
  // console.log('Text', line)
  const paths = line.slice(line.indexOf(BASE_URL))
  // if (state.path) {
  //   endData();
  // }
  // startData(paths);
}

function parseEmptyLine(line) {
  // console.log('Empty', line)
}

function parseTitle(line) {
  if (state.path) {
    endData();
  }
  
  const title = line.slice(7, -8).trim();
  // console.log('TITLE', line)
  startData(title);
  
  state.data['title'] = title;
  
  console.log('TITLE>', state.data['title'])
  
}

function parseHTMLAttrs(line) {
  const sl = line.split('"')
  const data = {}
  for (let i = 0; i < sl.length; i+=2) {
    if (!sl[i+1]) { continue; }
    const key = sl[i].split(' ')[1].slice(0,-1).trim().toLowerCase();
    const value = sl[i+1].trim();
    data[key] = value
  }
  return data;
}

function parseMetaOpenGraph(md) {
  const og = md['property'].split(':').slice(1).join(':')
  const OG = 'openGraph'
  if (!state.data[OG]) state.data['openGraph'] = {}
  switch(og) {
    case 'site_name':
      !state.data[OG]['siteName'] && (state.data[OG]['siteName'] = md['content'])
    
    case 'image:alt':
    case 'image:type':
    case 'image:width':
    case 'image:height':
    case 'image:secure_url':
      case 'locale:alternate':
    case 'keywords':
      break;
    
    default:
      state.data[OG][og] = md['content']
  }
}

function parseMetaWithProperty(md) {
  const prop = md['property'].split(':')[0]

  switch(prop) {
    case 'og':
      parseMetaOpenGraph(md); break;
  }
}

function parseMetaTwitter(md) {
  if (!state.data['twitter']) state.data['twitter'] = {}
  const name = md['name'].split(':').slice(1).join(':')
  switch(name) {
    case 'title':
    case 'description':
    case 'image':
    case 'card':
    case 'creator':
      state.data['twitter'][name] = md['content']

  }
}

function parseMetaWithName(md) {
  const name = md['name'].split(':')[0]
  switch(name) {
    case 'keywords':
      state.data[md['name']] = md['content'].split(',').map(el=>el.trim()); break;

    case 'description':
    case 'author':
    case 'robots':
    case 'copyright':
      state.data[md['name']] = md['content']; break;

    case 'twitter':
      parseMetaTwitter(md); break;
  }
}

function parseMeta(line) {
  const metadata = parseHTMLAttrs(line)
  if ('name' in metadata) {
    parseMetaWithName(metadata);
  } else if ('property' in metadata) {
    parseMetaWithProperty(metadata);
  }
}

function parseLink(line) {
  const metadata = parseHTMLAttrs(line)

  switch(metadata['rel']) {
    case 'canonical':
      state.data['canonical'] = metadata['href']; break;

    case 'alternate': {
      if (!state.data['hreflangs']) state.data['hreflangs'] = [];
      state.data['hreflangs'].push({
        hreflang: metadata['hreflang'],
        href: metadata['href']
      });
      break;
    }
  }
}

function structureJSONLD(jsonld) {
  return jsonld;
  // assume only one product per page
  // const productLD = jsonld.filter(el=>el['@type'] == 'Product')[0];
  // const productLD = jsonld[0]
  // for (let i = 1; i < jsonld.length; i++) {
  //   productLD[jsonld[i]['@type'].toLowerCase()] = jsonld[i]
  // }
  
  // return [productLD];
}

function saveSchema(type, slug) {
  // const {type, slug} = getTypeSlugFromURL(state.path);
  // console.log(state)
  if (state.schema) {
    // state.schema = JSON.stringify(JSON.parse(`[${state.schema.slice(1)}]`), null, 2)
    state.schema = `[${state.schema.slice(1)}]`
    console.log('SAVING SCHEMA', type, slug)
    const schemaData = structureJSONLD(JSON.parse(state.schema));
    if (finalData?.['meta']?.[type]?.[slug]) {
      finalData['meta'][type][slug]['jsonLd'] = schemaData
    }
    // writeFileSync(`${type}${slug.replace(/\//g,'-')}.json`, state.schema)
    // process.exit()
    state.schema = '';
  }
}

function parseScriptContent(line) {
  // console.log('PSC', line)
  state.schema += line.replace("};", "}")
}

function parseScript(line) {
  state.path = state.data['openGraph']['url']
  // console.log('PS', line, state.path)
  state.schema += ','
}

function parseTagLine(line) {
  // console.log('')
  // line= "<title>Reliable IT S</title>"
  line = line.trim()
  const fcl = line.indexOf('>') + 1;
  // console.log('TAG LINE', line)
  // console.log(fcl, line.length)
  let sl;
  if (fcl == line.length) {
    sl = line.split(' ')[0]
  } else {
    sl = line.slice(0, fcl-1)
  }
  // console.log('Tag', sl)
  // process.exit()
  // console.log(sl[0])
  switch(sl) {
    case '<meta':
      state.currentTag = 'meta';
      parseMeta(line); break;
    case '<link':
      state.currentTag = 'link';
      parseLink(line); break;
    case '<title':
      state.currentTag = 'title';
      parseTitle(line); break;
    case '<script':
      state.currentTag = 'script';
      parseScript(line); break;

    case '<head':
    default:
      break;
  }
}

function parseComment(line) {
  const data = line.slice(4, -3).trim();
  // if (data == 'START') {
  //   if (state.path) {
  //     endData();
  //   }
  //   startData(data);
  // }
  // console.log(data)
}

function parseHTML(html, type = 'meta') {
  const lines = html.split('\n')
  for (const line of lines) {
    // console.log('LINE', line)
    const firstChar = line.trim()[0];
    switch(firstChar) {
      case '<': {
        const secondChar = line[1];
        switch(secondChar) {
          case '!':
            parseComment(line); break;
          default:
            parseTagLine(line); break;
        };
        break;
      }

      case 'h':
      case 'U':
        parseTextLine(line); break;
      
      case '':
      default:
        switch(state.currentTag) {
          case 'script':
            parseScriptContent(line); break;
          default:
            parseEmptyLine(line); break;
        }
    }
  }
  endData();
  finalData[type] = {...data}
}

function parseData(data) {
  const newData = {}
  for (const key in data) {
    newData[encodeURI(key)] = data[key]
  }
  return newData
}

function makeFile(name, data) {
  return `
import { PageMeta } from "./types";

export const ${name}: PageMeta = ${JSON.stringify(parseData(data), null, 2)}
  `
}

async function saveDataToFiles(data) {
  for (const file in data) {
    const name = `${file}Meta`;
    const fileName = `${BASE_MD_PATH}/${name}.ts`
    // console.log(fileName);
    const fileData = makeFile(name, data[file]);
    await writeFile(fileName, fileData)
  }
}

function checkAndAppendPre(data) {
  const PRE = ['home', 'industries', 'servicesMeta', 'serviciosdeti']
  for (const pr of PRE) {
    if (!data[pr]) {
      data[pr] = {}
    }
  }
}

async function getPre(data) {
  for (const file in data) {
    const name = `${file}Meta`;
    const cMeta = data[file];
    console.log(name);
    try {
      const meta = await import(`./pre/${name}.js`)
      console.log('Parsing Pre for', name)
      // console.log(meta[name], cMeta)
      for (const nk in meta[name]) {
        if (nk[0] == '/') {
          cMeta[nk] = meta[name][nk]
        } else {
          cMeta[`/${nk}`] = meta[name][nk]
        }
      }
      // console.log(meta[name], cMeta)
    } catch(err) {
      // console.log(err)
      console.log('No Pre for', name)
    }
  }
}

async function makeMetasFile(data) {
  const fileName = `${BASE_MD_PATH}/metas.ts`
  let fileData = `
import { PageMeta } from "./types";
`
  for (const file in data) {
    const name = `${file}Meta`;
    fileData += `import { ${name} } from './${name}'\n`
  }

  fileData += `
export const metas: {
  [type in string]: PageMeta
} = {\n
`

  for (const file in data) {
    const name = `${file}Meta`;
    fileData += `  '${file}': ${name},\n`
  }

  fileData += `
}
`

  await writeFile(fileName, fileData);
}

async function parseSchema() {
  const html = await readHTMLFile(SCHEMA_PATH);
  // console.log(html)
  data = {}
  resetState();
  parseHTML(html, 'schema')
  // console.log(data)
}

const html = await readHTMLFile(META_PATH);
parseHTML(html, 'meta');
await parseSchema();
checkAndAppendPre(finalData['meta']);
await getPre(finalData['meta']);
await saveDataToFiles(finalData['meta']);
await makeMetasFile(finalData['meta']);
// console.log(data['contact'], data['contact']['/']['hreflangs'], data['contact']['/']['openGraph']);