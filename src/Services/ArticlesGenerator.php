<?php
/**
 * Created by PhpStorm.
 * User: gberger
 * Date: 04/05/2020
 * Time: 20:38
 */

namespace App\Services;

use App\Entity\BlogArticle;
use Faker\Generator;

class ArticlesGenerator implements ArticlesRepositoryInterface {

    /**
     * @var Generator
     */
    private $faker;

    public function __construct(Generator $faker) {
        $this->faker = $faker ;

    }

    private $articles = [
            ['id'=> 1, 'title'=>'lorem ipsum dolor sit amet...', 'image'=>'https://placekitten.com/200/200', 'content'=>'No shit! Right now you\'re Fredo. But, y\'know, with some sound advice and proper introductions, who knows? I\'ll tell you one thing: you\'ve got the right product. Anything that gets the DEA\'s panties in this big a bunch, you\'re onto something special. And I would like to be a small and silent part of it. Food for thought, yeah? So if you want to make more money and keep the money that you make, better call Saul! '],
            ['id'=> 2, 'title'=>'Suspicio? Bene ... tunc', 'image'=>'https://placekitten.com/200/200', 'content' =>'Better safe than sorry. That\'s my motto. Yeah, you do seem to have a little \'shit creek\' action going. You know, FYI, you can buy a paddle. Did you not plan for this contingency? I mean the Starship Enterprise had a self-destruct button. I\'m just saying. ' ]
        ];

    public function findAll(){
        return $this->generateArticles(10);
    }


    public function findById(int $id){
        return $this->generateArticle();
        /*
        $result = array_filter(
            $this->articles,
            function($article) use ($id){
                return $article['id'] === $id;
            }
        );


        return array_values($result)[0];
        */
    }

    public function generateArticles($qty=10){
        $articles = [];
        for($i = 0; $i < $qty; $i++){
            $article = $this->generateArticle();
            $article['id'] = $i;

            $articles[] = $article;
        }
        return $articles;
    }

    public function generateArticle(){
        return [
            'title' => $this->faker->words(7, true),
            'subtitle' => $this->faker->words(5, true),
            'author' => $this->faker->name,
            'pubDate' => $this->faker->dateTimeBetween('-2 years', 'now')->format('l F Y'),
            'image' => $this->faker->imageUrl(600, 400),
            'content' => $this->faker->paragraphs(5, true)
        ];
    }
    public function generateArticleEntity(){
        $article = new BlogArticle();
        $article->setTitle($this->faker->words(7, true))
                ->setSubtitle($this->faker->words(5, true) )
                // ->setAuthor( $this->faker->name)
                ->setImage( $this->faker->imageUrl(300,200))
                ->setContent($this->faker->paragraphs(5, true))
        ;
        return $article;
    }
}