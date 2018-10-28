function constructionCrew(input) {
    let worker = input;
    if(worker.handsShaking) {
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }
    return worker;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
  
  ));