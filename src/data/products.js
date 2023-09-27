import translations from '../translations';

// eslint-disable-next-line no-undef
const baseurl = process.env.PUBLIC_URL;

class Product {
  name;
  id;
  link;
  imageUrl;
  description;
  constructor(id, name, link, imageUrl, description) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

export default [
  new Product(
    'BIO_HAZARD_BAGS',
    translations.PRODUCTS.BIO_HAZARD_BAGS,
    'bio-hazard-bags',
    `${baseurl}/products/bio-hazard-bags.png`,
    translations.PRODUCT_DETAILS.BIO_HAZARD_BAGS.DESCRIPTION,
  ),
  new Product(
    'GARBAGE_BAGS',
    translations.PRODUCTS.GARBAGE_BAGS,
    'garbage-bags',
    `${baseurl}/products/garbage-bags.png`,
    translations.PRODUCT_DETAILS.GARBAGE_BAGS.DESCRIPTION,
  ),
  new Product(
    'GARBAGE_BAG_ROLLS',
    translations.PRODUCTS.GARBAGE_BAG_ROLLS,
    'garbage-bag-rolls',
    `${baseurl}/products/garbage-bag-rolls.png`,
    translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.DESCRIPTION,
  ),
  new Product(
    'LDPE_GROCERY_BAG',
    translations.PRODUCTS.LDPE_GROCERY_BAG,
    'ldpe-grocery-bags',
    `${baseurl}/products/ldpe-grocery-bags.jpeg`,
    translations.PRODUCT_DETAILS.LDPE_GROCERY_BAG.DESCRIPTION,
  ),
  new Product(
    'LDPE_SHRINK_FILM',
    translations.PRODUCTS.LDPE_SHRINK_FILM,
    'ldpe-shrink-films',
    `${baseurl}/products/ldpe-shrink-film.jpeg`,
    translations.PRODUCT_DETAILS.LDPE_SHRINK_FILM.DESCRIPTION,
  ),
  new Product(
    'NURSERY_BAGS',
    translations.PRODUCTS.NURSERY_BAGS,
    'nursery-bags',
    `${baseurl}/products/nursery-bags.jpeg`,
    translations.PRODUCT_DETAILS.NURSERY_BAGS.DESCRIPTION,
  ),
  new Product(
    'PLASTIC_CARRY_BAGS',
    translations.PRODUCTS.PLASTIC_CARRY_BAGS,
    'plastic-carry-bags',
    `${baseurl}/products/plastic-carry-bags.jpeg`,
    translations.PRODUCT_DETAILS.PLASTIC_CARRY_BAGS.DESCRIPTION,
  ),
  new Product(
    'POLYTHENE_BAGS',
    translations.PRODUCTS.POLYTHENE_BAGS,
    'polythene-bags',
    `${baseurl}/products/polyethylene-bags.jpeg`,
    translations.PRODUCT_DETAILS.POLYTHENE_BAGS.DESCRIPTION,
  ),
  new Product(
    'STRETCH_FILM_ROLLS',
    translations.PRODUCTS.STRETCH_FILM_ROLLS,
    'stretch-film-rolls',
    `${baseurl}/products/stretch-film-rolls.jpeg`,
    translations.PRODUCT_DETAILS.STRETCH_FILM_ROLLS.DESCRIPTION,
  ),
];
