
import { PageMeta } from "./types";
import { cookiesMeta } from './cookiesMeta'
import { privacyMeta } from './privacyMeta'
import { termsMeta } from './termsMeta'
import { citiesMeta } from './citiesMeta'
import { contactMeta } from './contactMeta'
import { industriesMeta } from './industriesMeta'
import { insightsMeta } from './insightsMeta'
import { locationsMeta } from './locationsMeta'
import { servicesMeta } from './servicesMeta'
import { serviciosdetiMeta } from './serviciosdetiMeta'
import { homeMeta } from './homeMeta'
import { servicesMetaMeta } from './servicesMetaMeta'

export const metas: {
  [type in string]: PageMeta
} = {

  'cookies': cookiesMeta,
  'privacy': privacyMeta,
  'terms': termsMeta,
  'cities': citiesMeta,
  'contact': contactMeta,
  'industries': industriesMeta,
  'insights': insightsMeta,
  'locations': locationsMeta,
  'services': servicesMeta,
  'serviciosdeti': serviciosdetiMeta,
  'home': homeMeta,
  'servicesMeta': servicesMetaMeta,

}
