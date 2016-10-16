# Carousel - CodeCamp2016 náhrádné zadanie

Tento projekt je vypracovaním náhradného zadania pre CodeCamp 2016 / Leto / FrontEnd webových aplikácií.

Vypracoval Jakub Kuba, 16/10/2016.

###Požiadavky###
Výsledok má zahŕňať:
- načítanie kampaní z Bonami API so zobrazením spinneru, pokiaľ sa dáta nenačítajú
- zobrazenie troch náhľadov kampaní vedľa seba a názvu kampaní pod náhľadom
- pokiaľ je možné posunúť zobrazené kampane do strany, zobraziť relevantnú šípku
  - to jest nezobrazovať šípku vľavo pri prvej a šípku vpravo pri poslednej kampani
- pri kliknutí na šípku posunúť zobrazené kampane o jednu doprava alebo doľava

###Funkčnosť###
Projekt bol vypracovaný tak, že spĺňa všetky funkčné požiadavky s niekoľko malými zmenami, respektíve rozvinutiami.

####1) Opozdenie pri načítaní dát####
Aby bolo zreteľné, že aplikácia je schopná zobraziť spinner pri dlhešj odozve serveru, bola použitá funkcia setTimeout ako:

```
setTimeout(function() {
  // API fetch code
}, 1500);
```

opozďujúca API request o 1.5s.

####2) Posun o tri kampane namiesto jednej####
I keď zadanie požaduje aby sa kampane pri kliku na šípku posunuli o jednu kampaň, vo vypracovaní sa kampane posúvajú tri miesta. Je tomu tak z dôvodu, že som uznal, že pri priemernom počte aktívnych Bonami kampaní 60 - 80, je posun o jednu kampaň príliš pomalá.
Posunutie o jednu kampaň je v zmysle logiky jednoduchšia ako pošun o tri, z dvôdodu, že počet kampaní nemusí byť deliteľný troma.
Napríklad:
- počet kampaní je 7
- momentálne zobrazujeme kampane s indexom 3, 4 a 5
  - (indexvané od nuly)
- pri kliknutí na šípku 'next' dôjde k zobrazeniu kampaní s indexom 4, 5 a 6 čím sa dostávame na koniec arrayu kampaní

Tento problém je vyriešený tak, že v prípade, že ak je počet kampaní ktoré pri posunutí vpravo ešte neboli zobrazené menší ako 3, dôjde k posunutiu len o ten toľko kampaní, koľko ich ešte nebolo zobrazených.

####3) UX zobrazenia šípok####
Odpovedajúce šípky by podľa zadania nemali byť pri zobrazení prvej a poslednej kampane vykreslené. Vo vypracoaní sú šípky zobrazené vždy, ak je však zobrazená prvá alebo posledná kampaň, je odpvoedajúca šípka bez funkcionality kliknutia a v 'dissabled' stave. Myslím, že toto riešenie je uživateľsky prístupnejšie ako úplné zmiznutie šípky., pretože uživateľ vie, že táto funkcionalita existuje, je však len momentálne nedostupná, pretože už nie je čo daľej zobraziť.

Dúfam, že v tejto podobe budete so spracovaním Carouselu spokojní a ešte raz ďakujem za príležitosť ktorou CodeCamp bol :)

Best regards,

J
