const caesar = function(x,n) {
    let array_x = x.split("");
    const alpha = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
    'a','A','b','B','c','C','d','D','e','E','f','F','g','G',
    'h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P',
    'q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z']   
    const lenx = array_x.length;
    const alphalen = alpha.length;
    for(let i = 0; i < lenx; i++){
        for(let i2 = 0; i2 < alphalen; i2++){
            if (array_x[i] === alpha[i2]){
                if(n>0){array_x.splice(i, 1, alpha[i2 + (n*2)]);
                    console.log(array_x);
                    break }
                else if(n==0){
                    array_x.splice(i, 1, alpha[i2 + (n*2)]);
                    console.log(array_x);
                    break 

                }
                else{
                    i2+=26*10
                    array_x.splice(i, 1, alpha[i2 + n * 2]);
                    console.log(array_x);
                    break 
                }
            }
            else {
                array_x = array_x;
                console.log(array_x);
                
            }
        }
    }
    console.log(array_x);
    const y = array_x.join('');

    return y
    
}
module.exports = caesar

