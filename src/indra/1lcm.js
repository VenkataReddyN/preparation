function gcd(a, b) {
    console.log("A::"+a+"  B::"+b , " %:::" + a%b)
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
  
const hcf = gcd(15,20);
const lcm = (15 * 20)/hcf;

console.log("HCF and LCM", hcf, lcm);