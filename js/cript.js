 function criptoString(){
                var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
                var procuraLetra = texto.value.search(procura);
        
                if(procuraLetra != -1){
                    alert ('Só é permitido letras minúsculas e sem acentuação.Tente novamente!');
                }else{
                    textoCripto = texto.value;
                    textoCripto = textoCripto.replaceAll('e', 'enter').replaceAll('i', 'imes')
                    .replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        
                    document.getElementById('mostra-mensagem').innerHTML = textoCripto;
                    texto.value = ""; 
                } 

            }

            
            function descriptoString(){
                var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
                var procuraLetra = texto.value.search(procura); 
        
                if(procuraLetra != -1){
                    alert ('Digite apenas letras minúsculas e sem acentuação.Tente novamente!');
                }else{
        
                    textoDescripto = texto.value;
                    textoDescripto = textoDescripto.replaceAll('enter', 'e').replaceAll('imes', 'i')
                    .replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
        
                    document.getElementById('mostra-mensagem').innerHTML = textoDescripto;
                    texto.value = "";
                }    
                    
            } 

            function copyToClipBoard(){
                var content = document.getElementById('mostra-mensagem');
                content.select();
                document.execCommand('copy');
            }
            
            function copyToClickBoard(){
                var content = document.getElementById('mostra-mensagem').innerHTML;

                navigator.clipboard.writeText(content)
                    .then(() => {
                    console.log("Texto copiado...")
                })
                    .catch(err => {
                    console.log('Aconteceu algum erro', err);
    })
 
}
  
        
            var textoCripto;
            var textoDescripto;
            var texto = document.querySelector('textarea');
            var botaoCopiar = document.getElementById('copy');
            
            var botaoCripto = document.getElementById('encrypt');
            var botaoDescripto = document.getElementById('decrypt');         
            botaoCripto.onclick = criptoString;
            botaoDescripto.onclick = descriptoString;
            botaoCopiar.onclick = copyToClipBoard;
