export default function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    const childrenContact = agenda.split('\n').filter((line) => line.includes(phone))

    if (childrenContact.length !== 1) return null

    const name = childrenContact[0].split('<')[1].split('>')[0]
    const address = childrenContact[0].replace(/<.+>|\+(\d|-)+/g, '').trim()

    return { name, address }
}
