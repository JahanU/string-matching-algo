export class StringService {
	deepCloneArray(array: Letters[]) {
    return JSON.parse(JSON.stringify(array))
  }
}