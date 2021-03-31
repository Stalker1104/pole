
//variables
{
    //              1           2           3           4               5               6           7           8           9         10               11           12          13
    var dots=[  [21.5,3.5], [29,9.2],   [42,12.6],  [58.5,12.2],    [64.5,8.2],     [57.5,14.6],      [53,16],  [51,20],    [63,26],    [83,26.6],  [74,31],    [84.5,35.7],    [89,48.7]];
    var nums=[  [23,3],     [32.2,9.8],   [42,12.6],  [58.5,12.2],    [68.5,8.2],     [60.5,15.3],      [53,16],  [51,20],    [63,26],    [83,25.6],  [74,31],    [84.5,35.7],    [89,48.7]];
    var countries={
        names:  ["Черный холм",      "Долина Венеамина","Перевал Моглильникова", "Малая степь",      "Рейдово",              "Стадниково",                "Жмыхово",          "Звенящая пустошь", "Ванадиева долина",       "10",    "Дымная долина",                   "12",              "13"],
        s:      ["10 052,50 кв. м.", "27 836,99 кв. м.","40 718,82 кв. м.",      "33 153,06 кв. м. ","144 287,00 кв. м. ",   "26 496,32 кв. м. ","21 137,01 кв. м. ","53 203,23 кв. м. ","80 058,78 кв. м. ","45 473,37 кв. м. ","76 215,15 кв. м. ",    "53 998,89 кв. м. ","4 129,46 кв. м. "],
        snum:   [10052.5           , 27836.99          ,40718.82          ,      33153.06           ,144287.00           ,   26496.32            ,21137.01          ,53203.23           ,80058.78           ,45473.37           ,76215.15           ,     53998.89          ,4129.46           ],
        snumd:  [10052.5           , 27836.99          ,40718.82          ,      33153.06           ,144287.00           ,   26496.32            ,21137.01          ,53203.23           ,80058.78           ,45473.37           ,76215.15           ,     53998.89          ,4129.46           ],
        bigest: ["Черный холм",      "Долина Венеамина","Перевал Моглильникова", "Малая степь",      "Рейдово",              "Стадниково",                "Жмыхово",          "Звенящая пустошь", "Ванадиева долина",       "10",    "Дымная долина",                   "12",              "13"],
        day:    ["Черный холм",      "Долина Венеамина","Перевал Моглильникова", "Малая степь",      "Рейдово",              "Стадниково",                "Жмыхово",          "Звенящая пустошь", "Ванадиева долина",       "10",    "Дымная долина",                   "12",  "-"],
    }
}
//functions
{
    function place_dots() {
        for (let i = 0; i < dots.length; i++) {
            var dots_place=document.getElementById("dots_div")
            dots_place.innerHTML+=`<div onclick="country_info(${i+1})" id="but${i+1}" class="dot" style="top: ${dots[i][0]}vh;left: ${dots[i][1]}vw;"></div>`
            console.log((i+1)+" dot placed sucssesfully")
        }
        
        console.log("Sucsses")
    }
    function add_dot(kol) {
        for (let i = 0; i < kol; i++) {
            var dots_place=document.getElementById("dots_div")
            dots_place.innerHTML+=`<div class="dot" style="top: 0vh;left: 0vw;"></div>`
            
        }
    }
    function place_numbers() {
        for (let i = 0; i < dots.length; i++) {
            var dots_place=document.getElementById("num_div")
            dots_place.innerHTML+=`<b class="num" style="top: ${nums[i][0]-3}vh;left: ${nums[i][1]}vw;">${i+1}</b>`
            console.log((i+1)+" num placed sucssesfully")
        }
        
        console.log("Sucsses")
    }
    function country_info(num) {
        
        
        info.innerHTML=""
        info.innerHTML=`
        <img id="flag_img" style="width:20vw" src="../флаги/${num}.jpg" onerror = "flag_img.src = 'noimg.png'">
        <h3>${countries.names[num-1]}</h3>
        <br>
        <div>Номер: ${num}</div>
        <div>Площадь: ${countries.s[num-1]} (${countries.bigest.indexOf(countries.names[num-1])+1}-е место)</div>
        <div>Дата остования: ${countries.day[/*num-1*/12]}</div>
        `

    }

}
//onload
{
    for (let i_2 = 0; i_2 < 1000; i_2++) {
        for (let i_1 = 0; i_1 < countries.snum.length; i_1++) {
            if (countries.snum[i_1]<countries.snum[i_1+1]) {
                var swap_val=countries.bigest[i_1]
                countries.bigest[i_1]=countries.bigest[i_1+1]
                countries.bigest[i_1+1]=swap_val
                swap_val=undefined

                var swap_val=countries.snum[i_1]
                countries.snum[i_1]=countries.snum[i_1+1]
                countries.snum[i_1+1]=swap_val
                swap_val=undefined
            }
        }
    }
}