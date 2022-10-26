import moment from "moment"

export function RelativeDateFormatted(date: string) {
  return moment(date).fromNow()
}
