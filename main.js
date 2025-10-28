function changeSection(a)
{
    let blok1 = document.getElementById("blok1");
    let blok2 = document.getElementById("blok2");
    let blok3 = document.getElementById("blok3");
    let jeden = document.getElementById("jeden");
    let dwa = document.getElementById("dwa");
    let trzy = document.getElementById("trzy");

if(a=='baza')
{
jeden.style.display="block";
dwa.style.display="none";
trzy.style.display="none";
blok1.style.backgroundColor="MistyRose";
blok2.style.backgroundColor="#FFAEA5";
blok3.style.backgroundColor="#FFAEA5";
}

if(a=='opisy')
{
jeden.style.display="none";
dwa.style.display="block";
trzy.style.display="none";
blok1.style.backgroundColor="FFAEA5";
blok2.style.backgroundColor="#MistyRose";
blok3.style.backgroundColor="#FFAEA5";
}

if(a=='galeria')
{
jeden.style.display="none";
dwa.style.display="none";
trzy.style.display="block";
blok1.style.backgroundColor="FFAEA5";
blok2.style.backgroundColor="#FFAEA5";
blok3.style.backgroundColor="#MistyRose";
}

}
