// @flow
export default function toDashedString(str: string): string {
  return str.replace(/[A-Z]/g, (capitalLetter) => {
    return `-${capitalLetter}`.toLowerCase()
  })
}
