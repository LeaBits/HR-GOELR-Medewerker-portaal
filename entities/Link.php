<?php

namespace Entities;

class Link{
    private $icon;
    private $title;
    private $description;
    private $link;

    private $categories;
    private $tags;

    public function __construct()
    {
        $this->categories = new \ArrayObject();
        $this->tags = new \ArrayObject();
    }

    public function setIcon($new){ $this->icon = $new; }
    public function setTitle($new){ $this->title = $new; }
    public function setDescription($new){ $this->description = $new; }
    public function setLink($new){ $this->link = $new; }

    public function addCategory(LinkCategory $new){ $this->categories[] = $new; }
    public function addTag(LinkTag $new){ $this->tags[] = $new; }

    public function getIcon(){ return $this->icon; }
    public function getTitle(){ return $this->title; }
    public function getDescription(){ return $this->description; }
    public function getLink(){ return $this->link; }

    public function getCategories(){ return $this->categories; }
    public function getTags(){ return $this->tags; }
}