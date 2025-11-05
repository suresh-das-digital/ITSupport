type ContactDataParams = {
  name: string,
  children?: React.ReactNode
}

export function ContactDataSection({keyData, value, children}: {keyData?: string, value?: string, children?: React.ReactNode}) {
  return (<>
    <div>
      {keyData && <span>{keyData}: </span>}
      {value && <span>{value}</span>}
      {children && children}
    </div>
  </>)
}

export function ContactData({name, children}: ContactDataParams) {
  return (<>
    <div>
      {children ? children : (<div>
        <span>{name}</span>
      </div>)}
    </div>
  </>)
}