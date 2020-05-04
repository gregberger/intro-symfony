<?php
/**
 * Created by PhpStorm.
 * User: gberger
 * Date: 20/04/2020
 * Time: 21:37
 */

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController {

    /**
     * Notre premier controller
     * il sera accessible par le chemin défini dans le premier paramètre de l'annotation Route
     * ex. ici (avec le serveur local) https://localhost:8000/
     *
     * @return Response
     * @Route("/", name="index")
     */
    public function index(){

        return new Response('hello world');
    }

    /**
     * @Route("/random/{min<\d+>}/{max}",
     *     name="app_default_random",
     *     methods={"GET"},
     *     requirements={"max"="\d+"}
     *     )
     */
    public function randomNumber($min=0, $max=1000){
        $number = rand($min, $max);

        return new Response('<h1>'.$number.'</h1>');
    }

    /**
     * @Route("/articles/{_locale}/{date<\d{4}-\d{2}-\d{2}>}-{title}.{_format}",
     *          name="app_default_article",
     *          locale="fr",
     *          format="html",
     *          requirements={
                    "_locale" = "en|fr",
     *              "_format" = "html|json"
*               }
     *     )
     */
    public function article(Request $request, $title){
        // exemple
    }

    /**
     * @Route("/hello/{name}", name="app_default_hello")
     */
    public function helloRequest(Request $request, $name) {
        return new Response('<h1>Hello '.$name.'</h1>');
    }

    /**
     * @param Psr\Log\LoggerInterface $logger
     * @Route("/container", name="app_default_container")
     */
    public function helloContainer(Request $request){

        $response = new Response();

        $response->setContent( 'ok');

        return $response;

    }
}