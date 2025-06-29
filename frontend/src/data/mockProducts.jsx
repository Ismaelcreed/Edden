import foudre from "../assets/Images/Jpeg/foudre.jpeg"
import portail from "../assets/Images/Jpeg/portail.jpeg"
import christ from "../assets/Images/Jpeg/christ.jpeg"
import relique from "../assets/Images/Jpeg/relique.jpeg"
import epee from "../assets/Images/Jpeg/epee.jpeg"
import bouclier from "../assets/Images/Jpeg/bouclier.jpeg"


export const mockProducts = [
  {
    id: 1,
    name: "Éclair de Zeus",
    price: 9999,
    originalPrice: 12999,
    image: `${foudre}`,
    category: "Armes Divines",  // Ajouté
    rating: 5.0,
    reviews: 42,
    description: "Foudre légendaire du roi des dieux, capable de foudroyer n'importe quel ennemi",
    stock: 1,
    discount: 23
  },
  {
    id: 2,
    name: "Portail du Paradis",
    price: 14999,
    originalPrice: 19999,
    image: `${portail}`,
    category: "Artéfacts Mystiques",
    rating: 4.9,
    reviews: 18,
    description: "Portail dimensionnel permettant d'accéder aux royaumes célestes",
    stock: 1,
    discount: 25
  },
  {
    id: 3,
    name: "Lance de Longinus",
    price: 7999,
    originalPrice: 9999,
    image: `${christ}`,
    category: "Reliques Sacrées",
    rating: 4.8,
    reviews: 56,
    description: "Arme ayant percé le flanc du Christ, dotée de pouvoirs immenses",
    stock: 3,
    discount: 20
  },
  {
    id: 4,
    name: "Pierre Philosophale",
    price: 24999,
    originalPrice: 29999,
    image: `${relique}`,
    category: "Artéfacts Alchimiques",
    rating: 4.9,
    reviews: 27,
    description: "Permet la transmutation et confère l'immortalité",
    stock: 1,
    discount: 17
  },
  {
    id: 5,
    name: "Excalibur",
    price: 8999,
    originalPrice: 11999,
    image: `${epee}`,
    category: "Armes Légendaires",
    rating: 4.7,
    reviews: 89,
    description: "Épée mythique du roi Arthur, sortie de la pierre par le vrai souverain",
    stock: 2,
    discount: 25
  },
  {
    id: 6,
    name: "Bouclier d'Athéna",
    price: 7499,
    originalPrice: 8999,
    image: `${bouclier}`,
    category: "Armes Divines",
    rating: 4.8,
    reviews: 64,
    description: "Bouclier indestructible orné de la tête de Méduse",
    stock: 4,
    discount: 17
  }
];