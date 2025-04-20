function sum(n){
    let ans=0;
    // for(let i=1;i<=n;i++){
    //     ans+=i;
    // }
    // return ans;
    ans=n*(n+1)/2;
    return ans;
}
const ans=sum(10);
console.log(ans); // 55
