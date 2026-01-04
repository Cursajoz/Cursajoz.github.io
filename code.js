const fetchMap = () => 
{
    let mapId = document.getElementById("mapId")?.value
    //const fileReader = new FileReader()
    fetch("FE2_MapTest.txt").then(content => content.text()).then(
        data => console.log(data)
    )
}