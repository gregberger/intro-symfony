<?php

namespace App\DataFixtures;

use App\Entity\Author;
use App\Entity\BlogArticle;
use App\Services\ArticlesGenerator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class ArticleFixtures extends Fixture
{

    private $articlesGenerator;

    public function __construct(ArticlesGenerator $generator) {

        $this->articlesGenerator = $generator;
    }



    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();
        $authors = [];
        for($i = 0; $i < 4; $i++){
            $auth = new Author();
            $auth->setName($faker->name );
            $manager->persist( $auth);
            $authors[] = $auth;
        }
        $manager->flush();

        for($i = 0; $i < 20; $i++){
            $auth = $authors[$i%4];

            $a = $this->articlesGenerator->generateArticleEntity();
            $a->setAuthor($auth);
            $manager->persist( $a);
        }
        $manager->flush();


    }
}
