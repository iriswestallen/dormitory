const groupA = [
    "Sob Onel", "Lele Nembot Ivan Maxwell", "Kunga Derick",
    "CHO JU-NINE NGU", "WAKNO TCHAGANG JOEL NATHAN",
    "Franck-Sorel", "Nkwenti Severian", "Nyengka Prosper B."
];

const groupB = [
    "Atebe Marc-Junior", "Tchankoumi Usher Pharell Blondi",
    "Tissong Guy Ghislain", "Vitalis Ngam", "TEGHA ROMEO .D",
    "Jagoum Richmond", "Leghadjeu Christian", "Taedzenyuy Desmond",
    "Micheal Ndoh", "Don Emmanuelo"
];

function shuffle(array) {
    try {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    } catch (error) {
        reportError(error);
        return array;
    }
}

function assignChores() {
    try {
        const shuffledA = shuffle([...groupA]);
        const shuffledB = shuffle([...groupB]);

        return {
            kitchen: [shuffledA[0]],
            parlor: [shuffledA[1], shuffledA[2], shuffledB[0], shuffledB[1], shuffledB[2]],
            toilet: [
                shuffledA[3], shuffledA[4], shuffledA[5],
                shuffledB[3], shuffledB[4], shuffledB[5], shuffledB[6]
            ],
            yard: [shuffledA[6], shuffledA[7], shuffledB[7]],
            drums: [shuffledB[8], shuffledB[9]]
        };
    } catch (error) {
        reportError(error);
        return null;
    }
}
