document.addEventListener('DOMContentLoaded', () => {
    const holdIkon = document.getElementById('sotet');
    const napIkon = document.getElementById('vilagos');
    const htmlElem = document.documentElement;

    function temaBeallitas(mode) {
        htmlElem.setAttribute('data-bs-theme', mode);
        
        localStorage.setItem('theme', mode);

        if (mode === 'dark') {
            if (holdIkon) holdIkon.style.display = 'none';
            if (napIkon) napIkon.style.display = 'inline-block';
        } else {
            if (holdIkon) holdIkon.style.display = 'inline-block';
            if (napIkon) napIkon.style.display = 'none';
        }
    }

    const mentettTema = localStorage.getItem('theme') || 'light';
    temaBeallitas(mentettTema);

    if (holdIkon) {
        holdIkon.addEventListener('click', () => {
            temaBeallitas('light');
        });
    }

    if (napIkon) {
        napIkon.addEventListener('click', () => {
            temaBeallitas('dark');
        });
    }
});