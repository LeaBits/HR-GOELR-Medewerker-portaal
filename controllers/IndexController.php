<?php

namespace Controllers;

use Entities\Link;
use Entities\LinkCategory;
use Entities\LinkTag;

class indexController{
    private $links;
    private $linkCategories;
    private $linkTags;

    public function __construct()
    {
        $this->links = new \ArrayObject();
        $this->linkCategories = new \ArrayObject();
        $this->linkTags = new \ArrayObject();

        $strJsonFileContents = file_get_contents("./data/links.json");
        $array = json_decode($strJsonFileContents, true);
        if(isset($array['links'])){
            foreach($array['links'] as $link){
                $newLink = new Link();

                $newLink->setIcon((isset($link['icon'])? $link['icon'] : null));
                $newLink->setTitle((isset($link['title'])? $link['title'] : null));
                $newLink->setDescription((isset($link['description'])? $link['description'] : null));
                $newLink->setLink((isset($link['link'])? $link['link'] : null));

                // categories
                if(isset($link['categories'])){
                    foreach($link['categories'] as $category){
                        $newLink->addCategory($this->getCategoryByName($category));
                    }
                }

                // tags
                if(isset($link['tags'])){
                    foreach($link['tags'] as $tag){
                        $newLink->addTag($this->getTagByName($tag));
                    }
                }

                $this->links[] = $newLink;
            }
        }
    }

    private function getCategoryByName($name){
        foreach($this->linkCategories as $category){
            if($category->getTitle() == $name){
                return $category;
            }
        }

        $category = new LinkCategory($name);
        $newIndex = count($this->linkCategories);
        $this->linkCategories[$newIndex] = $category;
        return  $this->linkCategories[$newIndex];
    }

    private function getTagByName($name){
        foreach($this->linkTags as $tag){
            if($tag->getTitle() == $name){
                return $tag;
            }
        }

        $tag = new LinkTag($name);
        $newIndex = count($this->linkTags);
        $this->linkTags[$newIndex] = $tag;
        return  $this->linkTags[$newIndex];
    }

    public function getLinksByCategoryName($name){
        $return = new \ArrayObject();
        foreach($this->links as $link){
            foreach($link->getCategories() as $category){
                if($category->getTitle() == $name){
                    $return[] = $link;
                    break;
                }
            }
        }
        return $return;
    }

    public function getTagsByCategoryName($name){
        $tags = new \ArrayObject();

        $links = $this->getLinksByCategoryName($name);
        foreach($links as $link){
            foreach($link->getTags() as $tag){
                $found = false;
                foreach($tags as $newTag){
                    if($newTag->getTitle() == $tag->getTitle()){
                        $found = true;
                        break;
                    }
                }
                if($found == false){
                    $tags[] = $tag;
                }
            }
        }

        return $tags;
    }

    public function getCardsByCategoryName($name){
        $HTML = "";

        $links = $this->getLinksByCategoryName($name);
        foreach($links as $link){
            $classes = "";
            foreach($link->getCategories() as $category){
                $classes .= ' '.$category->getCleanedTitle();
            }
            foreach($link->getTags() as $tag){
                $classes .= ' '.$tag->getCleanedTitle();
            }

            $HTML .= '<div class="col-md-4 mt-1 mb-1'.$classes.'">
                <div class="card">
                    <div class="card-top card-img-top card-body"><i class="fa-7x '.$link->getIcon().'"></i></div>
                    <div class="card-body">
                        <h5 class="card-title">'.$link->getTitle().'</h5>
                        <p class="card-text">'.$link->getDescription().'</p>
                        <a href="'.$link->getLink().'" target="_blank" class="btn btn-dark stretched-link">Klik hier</a>
                    </div>
                </div>
            </div>';
        }

        return $HTML;
    }
}