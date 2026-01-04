const fetchMap = async () => 
{
    let mapId = document.getElementById("mapId")?.value
    //const fileReader = new FileReader()
    let content = await fetch("FE2_MapTest.txt")
    let chosenId = await content.text()

    let idArray = chosenId.split("/\r?\n/")
    console.log(idArray)
    if (!idArray.includes(`${chosenId}\r`))
    {
        return
    }
    const url = `https://economy.roblox.com/v2/assets/${mapId}/details`
    
    let req = await fetch(url)
    let response = await req.json()
    
    console.log(response)
}
