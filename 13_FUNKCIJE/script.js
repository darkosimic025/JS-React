

function cekanje(t, p, n) {
    if (t < p || t >= p + n) {
        let cekanje = 0;
        return cekanje;
    } else {
        let cekanje = n + p - t;
        return cekanje;
    }
}

let cekanje1 = cekanje(26, 5, 20)
console.log(cekanje1);