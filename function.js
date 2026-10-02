function inputdata(event){
    // untuk tidak reload
    event.preventDefault();
    let data1 = document.getElementById("note").value;
    let data2 = document.getElementById("label").value;
    // data dalam objek
    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
    siswa.push({ note: data1, label: data2 });
    // input data
    localStorage.setItem("siswa", JSON.stringify(siswa));
    // tampilkan dan ambil data
    console.log(JSON.parse(localStorage.getItem("siswa")));

    tampilkan();
}

// tampil data localstorage
function tampilkan() {
    let data = JSON.parse(localStorage.getItem("siswa"));
    const ul = document.getElementById("data-tampil");
    ul.innerHTML = "";

    data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.note} - ${item.label}` ;
        ul.appendChild(li);
    });
}
tampilkan();

// delete data LOCALstorage
function deletdata() {
    localStorage.clear("siswa");
    tampilkan();
}
function inputdata(event){
    // untuk tidak reload
    event.preventDefault();
    let data1 = document.getElementById("note").value;
    let data2 = document.getElementById("label").value;
    // data dalam objek
    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
    siswa.push({ note: data1, label: data2 });
    // input data
    localStorage.setItem("siswa", JSON.stringify(siswa));

    tampilkan();
}

// tampil data localstorage
function tampilkan() {
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    const ul = document.getElementById("data-tampil");
    ul.innerHTML = "";

    data.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.note} - ${item.label} `;

        // tombol hapus per item
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.type = "button";
        btnHapus.onclick = () => hapusSatu(index);

        li.appendChild(btnHapus);
        ul.appendChild(li);
    });
}
tampilkan();

// hapus satu data berdasarkan index
function hapusSatu(index) {
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    data.splice(index, 1); // buang 1 data di posisi index
    localStorage.setItem("siswa", JSON.stringify(data));
    tampilkan();
}

// delete semua data localStorage
function deletdata() {
    localStorage.removeItem("siswa");
    tampilkan();
}

// panggil function 
inputdata();