import { MessagesRepository } from "./messages.repoository"

export class MessagesService {
    messagesRepo: MessagesRepository

    constructor() {
        this.messagesRepo = new MessagesRepository()
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id)
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content: string) {
        this.messagesRepo.create(content)
    }
}
