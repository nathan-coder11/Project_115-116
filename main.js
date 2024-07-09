//https://teachablemachine.withgoogle.com/models/RRN4OJwcR/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RRN4OJwcR/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
if(error)
    {
        console.log(error)
    }
    console.log(results)
}