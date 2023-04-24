import HomePage from "../pages/homepage";
import SearchResultsPage from "../pages/searchResultsPage";
import ProductPage from "../pages/productpage";
import CheckoutPage from "../pages/checkoutPage";



describe('Product search an purchase on https://www.weld.pl', () => {

  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();


  beforeEach(() => {
    homePage.visitHomePage();
  });

  it('Product search', () => {
    homePage.getProductSearch('lonża')
  })

  it('Adding product to cart', () => {
    homePage.getProductSearch('lonża');
    searchResultsPage.chosenProduct();
    productPage.addToCart();
  })


  it('Making a purchase', () => {
    homePage.getProductSearch('lonża');
    searchResultsPage.chosenProduct();
    productPage.addToCart();
    productPage.goToCart();
    checkoutPage.goFurther();
    checkoutPage.fillOrderForm();
    checkoutPage.placeOrderButton();

  })



})