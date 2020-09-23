const masks = {
    field (value) { 
        return value
        .replace(/[\d\;\:\?\/\|\\\°\º\ª\[\]\{\}\=\+\¨\§\-\_\(\)\!\@\#\$\%\"\&\*\,\.\<\>\"]/g, '');
    }    
};