let a = { "a": "b", "c": "d", "e": { "f": "g", "h": "i" }, "j": "k" };
//a.b c.d e.f.g e.h.i j.k
let output = ""
for (let i in a) {
  if (typeof a[i] != "object") {
    output = output + i + "." + a[i] + " "
  } else {
    for (let j in a[i]) {
      output = output + i + "." + j + "." + a[i][j] + " "
    }
  }
}
output.trim();

