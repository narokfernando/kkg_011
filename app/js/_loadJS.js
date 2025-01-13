function loadJS(id,url) {
    let elem = document.getElementById(id);
    if(elem == undefined){
        return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.id = id;
                script.src = url;
                script.async = true;

                script.onload = () => {
                    resolve('Archivo JavaScript cargado');
                };
                script.onerror = () => {
                    reject(new Error('Error al cargar el archivo JS externo'));
                };
                document.body.appendChild(script);
        });
    }
}

//loadjs(id,src2, false); // If we set async false, src2 is loaded and executed first, then src3 will be loaded 
//loadjs(id,src3, true);