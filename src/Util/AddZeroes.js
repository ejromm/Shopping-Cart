export default function AddZeroes(num) {
    
    if(!String(num).includes('.')) return num; 
    else return Number(num).toFixed(2);
}