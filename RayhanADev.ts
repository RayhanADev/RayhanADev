class Message {
    speaker: string;
    message: string;

    constructor(speaker: string, message: string) {
        this.speaker = speaker;
        this.message = message;
    }

    speak() {
        return this.speaker + ': ' + this.message;
    }
}

let message = new Message('RayhanADev', 'Hello there people! The name's Ray and I'm a fullstack developer and hobbyist!');
console.log(message.speak());
