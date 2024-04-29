/**
 * Contains the miscellaneous route handlers.
 * @author Salah Eddine Hamidi <https://github.com/Gzaros>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
