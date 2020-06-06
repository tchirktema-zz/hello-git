html2canvas(document.body).then(canvas => {  
                document.body.appendChild(canvas);  
                //console.log(canvas.toDataURL());  
                dataURL = canvas.toDataURL(); 
                console.log(dataURL); 
                // post_data(dataURL);  
            });  
