const btn = document.getElementById('btn');
const tugilgan_kun = document.getElementById('tugilgan_kun');
const natija = document.getElementById('natija');

function yoshXisoblash(){
    const tugilgan_kunBir = tugilgan_kun.value;
    if (tugilgan_kunBir === ''){
        alert("Iltimos sanani kiriting");
    } else{
        const yosh = getYosh(tugilgan_kunBir);
        natija.innerText = `Sizning yoshingiz ${yosh} ${yosh > 1  ? "yoshda" : "yoshda"}`;
        
    }
}

function getYosh(tugilgan_kunBir){
    const joriysana = new Date();
    const tugilgan_kunikki = new Date(tugilgan_kunBir);
    let yosh = joriysana.getFullYear() - tugilgan_kunikki.getFullYear();
    let oy = joriysana.getMonth() - tugilgan_kunikki.getMonth();

    if(
        oy < 0 || 
        (oy === 0 && joriysana.getDate() < tugilgan_kunikki.getDate())
    ){
        yosh--;
    }
    return yosh;
}
btn.addEventListener("click", yoshXisoblash);
