
function download() {
    
}


function hadnleDownload(e) {

    const image = e.target;
    const canvas = document.createElement('canvas');

    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0, image.clientWidth, image.clientHeight);

    canvas.toBlob((blob) => {
        saveBlob(blob, {
            fileName: 'something.png',
        });
    });
}

function saveBlob(data, options) {
    return new Promise((resolve, reject) => {
        try {
            const blob = new Blob([data], { type: options.type });
            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, options.fileName);
                resolve();
            } else {
                const link = document.createElement('a');

                link.href = window.URL.createObjectURL(blob);
                link.download = options.fileName;

                link.style.display = 'none';
                document.body.appendChild(link);

                link.click();
                document.body.removeChild(link);

                window.URL.revokeObjectURL(link.href);
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}