const API_KEY="Mt31Y11sPLRCtWdvpNXOjr33kaN2"

//Get all upcoming Matches

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url).then((response) => response.json())
    .catch((error)=> console.log("Error : ",error));
}