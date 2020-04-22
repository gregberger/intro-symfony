<?php
/**
 * Created by PhpStorm.
 * User: gberger
 * Date: 20/04/2020
 * Time: 21:37
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

}