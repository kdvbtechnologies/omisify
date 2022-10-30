export default function Prices() {
  const family = {
    fontFamily:
      ' "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  return (
    <>
      <div className="back-btn">
        <button>Retour</button>
      </div>
      <div style={family} className="prices">
        <div className="title">
          <p>Tarification</p>
        </div>

        <div className="a">
          <p>Payez ce que vous pouvez et obtenez d'excellent résultats !</p>
        </div>

        <div className="shrink-b">
          <div className="b">
            <div className="display-flex-svg-and-p">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 480.822 480.822"
                  version="1.1"
                  viewBox="0 0 480.822 480.822"
                  xmlSpace="preserve"
                >
                  <path d="M477.929 387.31l-69.874-95.563c-15.397-21.059-38.438-35.084-63.388-39.082 16.204-24.051 24.898-52.333 24.898-82.14 0-81.387-66.213-147.6-147.6-147.6s-147.6 66.213-147.6 147.6c0 28.511 8.148 56.186 23.564 80.032a147.855 147.855 0 0053.524 49.637c4.003 16.208 18.601 28.373 35.779 28.755l88.164 1.959c2.29.051 3.729 1.29 4.383 2.024s1.72 2.307 1.507 4.588c-.289 3.095-2.926 5.489-6.025 5.489l-.094-.001-101.287-1.572a24.86 24.86 0 01-15.348-5.637l-89.688-73.776c-17.121-14.085-42.383-12.424-57.514 3.779C3.632 274.046-.382 284.793.027 296.065s5.193 21.7 13.471 29.363L127.516 430.99a79.982 79.982 0 0051.658 21.242l169.337 5.653c.171.006.34.009.51.009 8.052 0 14.711-6.391 14.982-14.499.276-8.28-6.211-15.216-14.491-15.492l-169.336-5.653a49.98 49.98 0 01-32.278-13.273L33.881 303.416a12.017 12.017 0 01-3.872-8.439 12.014 12.014 0 013.249-8.697c4.348-4.656 11.609-5.133 16.529-1.087l89.688 73.777a54.977 54.977 0 0033.94 12.464l101.287 1.572c.187.003.371.005.558.005 18.464-.002 34.179-14.265 35.898-32.707.924-9.925-2.348-19.885-8.979-27.327s-16.15-11.838-26.116-12.06l-88.164-1.959c-3.98-.089-7.286-3.271-7.524-7.245-.172-2.864 1.208-4.805 2.045-5.707s2.67-2.423 5.538-2.465l140.835-2.047c.72-.01 1.437-.008 2.149.001 20.547.309 40.322 10.761 52.897 27.96l69.874 95.563c4.889 6.687 14.275 8.146 20.962 3.255 6.687-4.891 8.144-14.275 3.254-20.963zM187.521 253.545c-10.246.148-20.12 4.542-27.09 12.052a37.25 37.25 0 00-2.786 3.398 117.993 117.993 0 01-34.522-34.722c-12.272-18.983-18.758-41.026-18.758-63.746 0-64.845 52.755-117.6 117.6-117.6s117.6 52.755 117.6 117.6c0 30.667-11.543 59.312-32.622 81.283l-74.981 1.09v-5.448c19.482-4.542 34.043-22.039 34.043-42.884 0-20.846-14.561-38.343-34.043-42.885v-47.058c8.278 3.803 14.043 12.167 14.043 21.856 0 5.522 4.477 10 10 10s10-4.478 10-10c0-20.845-14.561-38.342-34.043-42.884v-6.932c0-5.522-4.477-10-10-10s-10 4.478-10 10v6.932c-19.482 4.542-34.043 22.039-34.043 42.884s14.561 38.341 34.043 42.884v47.059c-8.278-3.802-14.043-12.166-14.043-21.856 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 20.845 14.561 38.341 34.043 42.884v5.738l-24.441.355zm24.441-95.209c-8.278-3.802-14.043-12.166-14.043-21.856 0-9.689 5.765-18.053 14.043-21.856v43.712zm20 24.374c8.278 3.803 14.043 12.167 14.043 21.857s-5.765 18.054-14.043 21.856V182.71z"></path>
                </svg>
              </div>
              <p>Dépensez moins</p>
            </div>

            <div className="display-flex-svg-and-p">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path d="M23 23v466h466v-18H41v-82.184l85.854-57.234 70.023 70.022 65.133-260.536L387.28 203.7l67.79-107.97 19.317 11.858 6.102-71.1-60.644 37.616 19.884 12.207-59.01 93.99-130.732-65.366-62.865 251.462-57.98-57.978L41 367.184V23H23z"></path>
                </svg>
              </div>
              <p>Gagnez plus</p>
            </div>
          </div>
        </div>

        <p>
          Le modèle de tarification basé sur les enchères vous permet de fixer
          vous-même vos prix depuis la page des enchères et de dépenser moins
          pour gagner plus.
        </p>
        <p>
          Depuis votre compte Omisify Business vous pourrez fixer la journée
          généreuse de votre choix pour bénéficier chaque semaine de la
          publicité gratuite
        </p>
        <button>Essayer gratuitement la Publicité</button>
        <p>
          Le Bonus de générosité vous permet de bénéficier chaque semaine de la
          Publicité multiplié par 10
        </p>
        <p>
          Par exemple lorsqu'une entreprise paye pour que la publicité de son
          produit soit vue par 1000 personnes, le Bonus de générosité lui
          donnera l'avantage d'atteindre avec sa publicité jusqu'à 10.000
          personnes sans rien payer de plus. C'est à dire plus de vente, moins
          de dépenses et plus de bénéfices
        </p>
        <button>Essayer gratuitement la Publicité</button>
        <p>
          Maintenez vos prix fixes en payant le même prix avant l'épuisement de
          votre publicité en cours
        </p>
        <p>
          En payant avant l'épuisement de la publicité en cours, vous n'aurez
          pas besoin de repartir sur la page des enchères car le meme montant
          sera appliqué et votre publicité continuera sans aucune interruption.
        </p>
      </div>
    </>
  );
}
