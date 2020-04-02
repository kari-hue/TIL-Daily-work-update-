
class Github{

    constructor(){
        this.client_id ='7c3413e25c5d82f97f7f';
        this.client_secret = 'fe60a53b61a11beaf53f5085b3fb1287e3993443'; 
    }


    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}