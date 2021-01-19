import { Injectable } from '@nestjs/common'

// @Injectable()
// export class AppService {
// 	animals: any
// 	constructor() {
// 		this.animals = {
// 			1: { name: '감자' },
// 			2: { name: '채림' },
// 		}
// 	}

// 	getAnimal(id: number): string {
// 		return this.animals[id]
// 	}
// }

@Injectable()
export class AppService {
	private posts
	constructor() {
		this.posts = []
	}
	potato(title: string, code: string, text: string) {
		const tmp = {
			"title" : title,
			"code": code,
			"text": text
		}
		this.posts.push(tmp);
	}

	print() {
		return this.posts;
	}
	
	findPost(title) {
		const result = this.posts.find((post) => post.title === title);
		return result;
	}
}