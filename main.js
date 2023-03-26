/*Podle postupu níže vyrobte stránku podobnou té na obrázku.

Newsletter
Založte HTML stránku s JavaScriptem.

Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.

Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.

Texty můžete vymyslet vlastní nebo využít následující:

Jednou za týden posíláme newsletter ze světa frontendu a UX.
Zadejte svůj e-mail a zůstaňte v obraze.
Odebírat
Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.
Pokud máte čas a chuť, nastylujte stránku dle svého citu. Obrázek výše může posloužit jako inspirace.

Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. 
Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.*/

const form = document.querySelector('#newsletter')
const inputEmail = document.querySelector('#email')

const odebirani = (event) => {
	event.preventDefault()
	const email = inputEmail.value
	form.innerHTML = `<p>Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese <strong>${email}</strong>.</p>`
}

form.addEventListener('submit', odebirani)

const control = (event) => {
if (inputEmail.value === '' || inputEmail.value.indexOf('@') === -1) {
	inputEmail.classList.add('ramecek')
} else {
	inputEmail.classList.remove('ramecek')
}
}

inputEmail.addEventListener('input', control)
