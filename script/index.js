var seasonOne = ["Popcornowa Panika", "Błyskawiczne zniknięcie", "Permanentna inwigiliacja", "Korona za rozum",
                 "Sąsiad z Księżyca", "Nawiedzone zoo", "Operacja: Pluszak", "Dzień króla Juliana", "Operacja: Jajko",
                 "O jedną baterię za daleko", "Wszystko albo nic", "Dwie stopy nad ziemią i wyżej", "Niewidzialny wróg",
                 "Król Maurice Pierwszy", "Mistrz kierownicy", "Bombowa rozrywka", "Albo rybka albo...", "Lodzio miodzio",
                 "Operacja: Igła", "Zaćmiony", "Mega Mort", "Sublokatorka", "Wrażliwy Rysiek", "Powrót Mecha-Lemura",
                 "Ni wydra, ni...", "Kici kici", "Klątwa", "Zakochana małpa", "Zbliża się orka", "Mniej niż zero", 
                 "Koleje losu", "Maska szopa", "Zemsta doktora Bulgota", "Tańczący z duszami", "Prawo dżungli", "Byłem żywym trupem",
                 "Operacja: Żądło", "Dzień próby", "Gorzka Prawda", "Król jest sam", "Nietykalny", "Słoniowa pamięć", "Miłość z automatu",
                 "Miss Ja", "Porządek musi być", "Żeluś", "Zoo Tube", "Potwór z głębin", "Sokół i kocha", "Memento Mort", "Zemsta jest słodka"];

var seasonTwo = ["Czerwony Wiewiór", "To kwestia czasu", "Kaboom", "Hełm", "Robaki atakują", "Szkolna wycieczka", "Ali-lokator",
                 "Gołębie serce", "Zaginiony skarb Złotego Wiewióra", "Noce i dnie", "W uścisku boa", "Uwolnić owcę", "Twarde jajko do zgryzienia",
                 "Ostrożnie z życzeniami", "Prima Aprilis", "Cześć, laleczko", "Drobynm Drukiem", "Zaraza", "Dorwać kierowcę", "Pan Talon",
                 "Przetrwać w miejskiej dżungli", "Przyjaciel w pudełku", "Borsucza siła", "Zakazany wynalazek", "Fajny wózek", "Przedświąteczna gorączka",
                 "Wykonać robotę", "Brylantowy król", "Knujemy", "Czarodziejski pędzel", "Wyobcowany", "Biała dama", "Dyrektor X",
                 "Miłość boli", "Operacja: Dobry uczynek", "Chrupki w pudle", "Współlokator", "Jestem szczurem", "Prawa ręka", "Gdzie mój mózg?",
                 "Za słodko", "Królem być", "Wizyta wujka", "Maurice idzie spać", "Zamaskowany wichrzyciel", "Operacja: Teatr", 
                 "Operacja: zmień sąsiada", "Nie wolno prześledzić", "Mały ptaszek", "Boa mściciel", "Nienawiść od pierwszego wejrzenia",
                 "Problem z Żelusiem", "Włochaty problem", "Miłość o długiej szyi", "Wymarzone wakacje", "Zwierzęta domowe", "Tyci-tyci",
                 "Arcywróg", "Wielki S.T.A.N.K", "Niebezpieczna gra", "Uliczny kolega", "Czas stop", "Nasz człowiek w Greferbergerstanie",
                 "Powrót Zemsty Doktora Bulgota", "Uwierz w bebech", "Ptak zamknięty, ptak szalony", "Operacja: Antarktyda", "Bezsenny ninja",
                 "Wróg u bram", "Impas w tunelu", "Zagrożony gatunek"];

var seasonThree = ["Mała Stopa", "Matczyna miłość", "Śledzik dla szefa", "Wewnętrzne piękno", "Operacja: Wielka kula", 
                   "Koty dwa", "Akcja bez zadęcia", "Kura mózgowa", "Królestwo za kciuk", "Gracja na lodzie", 
                   "Podkopany dołek", "Ja, król", "Szeregowy i fabryka cuksów", "Najlepszy wróg", "Noc Wezuwiuszów", 
                   "Operacja: Jednorożec Apokalipsy", "Wszędzie żołędzie", "Terror z Madagaskaru", "Bananowa Afryka", 
                   "Test na szefa", "Operacja \"Podmianka\"", "Śniegogeddon", "Tunel miłości", "Idealny dzień", 
                   "Pingwin, który mnie kochał", "Kulki śadowe", "Gdy Chucka brak"];
// FUNKCJA STARTOWA
function main()
{
    $(window).scroll(function()
    {
       onScrollHandler();
    });
    
    $("#menuTop div").each(function(){
        $(this).on('click', mainMenuClick);
    });
    
    $("#heroMenu div").each(function(){
       $(this).on('click', heroSwitchPanelClick);
    });
    
    $("#episodes div div").each(function(){
       $(this).on('click', seasonClick); 
    });
    
    $("#heroMenu div").eq(0).click();
}

// ANIMACJA GORNEGO MENU
function onScrollHandler()
{
    var windowHeight = window.outerHeight;
    var offset = window.pageYOffset;
    var $nav = $('#menuTop');
    

    if(offset > windowHeight*0.08)
    {
        $nav.addClass('moved');
    }
    else
    {
        $nav.removeClass('moved');
    }
}

// OBSLUGA GORNEGO MENU - SCROLLOWANIE
function mainMenuClick()
{
    var $target = $(this).find("label").attr('for');
    $target = $("#"+$target);
    
    console.log($target);
    $("html, body").animate({
        scrollTop: ($target.offset().top - $("header").outerHeight())
    }, 500);
}

// OBSLUGA KLIKNIECIA IKONKI BOHATERA
function heroIconClick()
{
    $(".heroIcons div").each(function(){
        $(this).removeClass("selectedIcon");
    });
    $(this).addClass("selectedIcon");
    
    var pathToDescr = "./content/"+$(this).attr('id')+".txt";
    var pathToImg = "./img/"+$(this).attr('id')+".png";
    $("#heroDescription").load(pathToDescr);
    $("#heroImg").css("background-image", "url("+pathToImg+")");
    console.log($(this).attr('id'));
}

// ZMIANA BOCZNEGO MENU WYSWIETLAJACEGO IKONKI BOHATEROW
function heroSwitchPanelClick()
{
    var pathToContent = "./content/"+$(this).attr('id')+".html";
    
    $("#heroIconsTarget").load(pathToContent, function()
    {
        // PODPIECIE ZDARZENIA CLICK DO IKONEK
        $(".heroIcons div").each(function(){
            $(this).on('click', heroIconClick);
        });
        
        $(".heroIcons div").eq(0).click(); // zmiana panelu skutkuje automatycznym wywolaniem klilniecia w 1 obrazek
    });
    
    $("#heroMenu div").each(function()
    {
        $(this).removeClass("selected");
    });
        
    $(this).addClass("selected");
    console.log($(this).attr('id'));
}

// OBSLUGA ZMIANY SEZONOW
function seasonClick()
{
    switch($(this).attr("id"))
    {
        case "seasonOne":
            tableCreator(seasonOne);
            break;
        
        case "seasonTwo":
            tableCreator(seasonTwo);
            break;
        
        case "seasonThree":
            tableCreator(seasonThree);
            break;
    }
}

// FUNKCJA TWORZĄCA TABELE Z LISTĄ ODCINKOW
function tableCreator(sourceArray)
{
    var fragment = document.createDocumentFragment();
    var table = document.createElement("table");
    
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    
    th1.innerHTML = th3.innerHTML = "Nr";
    th2.innerHTML = th4.innerHTML = "Tytuł";
    
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    
    table.appendChild(tr);
    
    var i = 1;
    for(var x = 0; x < sourceArray.length/2 - 1 ; x++)
    {		
        if(x%2 === 0)
        {
           var tr = document.createElement("tr");
           var td1 = document.createElement("td");
           var td2 = document.createElement("td");
           var td3 = document.createElement("td");
           var td4 = document.createElement("td"); 

           td1.innerHTML = i;
           td1.rowSpan = 2;
           td2.innerHTML = sourceArray[x];
           td3.rowSpan = 2;
           td3.innerHTML = i + Math.round(sourceArray.length/2);
           td4.innerHTML = sourceArray[Math.round(x+sourceArray.length/2)];

           tr.appendChild(td1);
           tr.appendChild(td2);
           tr.appendChild(td3);
           tr.appendChild(td4);
           
           i++;
        }
        else
        {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            
            td1.innerHTML = sourceArray[x];
            td2.innerHTML = sourceArray[Math.round(x+sourceArray.length/2)];
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
       
       table.appendChild(tr);
    }
    
    table.style.border = "solid 1px";
	table.style.width = "100%";
	
    fragment.appendChild(table);
    
    $("#episodesTable").html("").append(fragment);
}
