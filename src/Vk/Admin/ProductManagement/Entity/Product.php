<?php

namespace App\Vk\Admin\ProductManagement\Entity;

use App\Vk\Admin\ProductManagement\Repository\ProductRepository;
use App\Vk\Admin\ProductManagement\Entity\Category;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\OpenApi\Model;
use App\Vk\Admin\ProductManagement\Controller\CreateMediaObjectAction;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['media_object:read']], 
    types: ['https://schema.org/MediaObject'],
    operations: [
        new Get(),
        new GetCollection(),
        new Post(
            controller: CreateMediaObjectAction::class, 
            deserialize: false, 
            validationContext: ['groups' => ['Default', 'media_object_create']], 
            openapi: new Model\Operation(
                requestBody: new Model\RequestBody(
                    content: new \ArrayObject([
                        'multipart/form-data' => [
                            'schema' => [
                                'type' => 'object', 
                                'properties' => [
                                    'sku'  => [
                                        'type' => 'string',
                                        "description" => "The sku of the product identifier",
                                    ],
                                    'isActive'  => [
                                        'type' => 'integer',
                                        "description" => "The status of the product",
                                    ],
                                    'categories'  => [
                                        'type' => 'array',
                                        "description" => "The categories of the product",
                                    ],
                                    'description'  => [
                                        'type' => 'text',
                                        "description" => "The description of the product",
                                    ],
                                    'price'  => [
                                        'type' => 'decimal',
                                        "description" => "The price of the product",
                                    ],
                                    'file' => [
                                        'type' => 'string', 
                                        'format' => 'binary',
                                    ]
                                ]
                            ]
                        ]
                    ])
                )
            )
        )
    ]
)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 225)]
    private ?string $name;

    #[ORM\Column(type: 'string', length: 225)]
    private ?string $sku;

    #[ORM\Column(type: 'text', length: 225)]
    private ?string $description;

    #[ORM\Column(type:"decimal", precision:10, scale:2, nullable:true)]
    private ?string $price;

    #[ORM\Column(type: 'boolean', nullable:true)]
    private ?bool $isActive;

    #[ORM\Column(type:"integer", nullable:true)]
    private ?int $quantity;

    #[ORM\Column(type: 'datetime')]
    private ? \DateTimeInterface $createdAt;

    #[ORM\Column(type: 'datetime')]
    private ? \DateTimeInterface $updatedAt;

    // #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'product')]
    // #[ORM\JoinColumn(nullable: true)]
    // private ?Category $category;

    #[ORM\OneToMany(targetEntity: MediaObject::class, mappedBy: 'product', cascade: ["persist", "remove"])]
    private ?Collection $mediaObject;

    public function __construct()
    {
        $this->mediaObject = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function setSku(string $sku): static
    {
        $this->sku = $sku;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(?bool $isActive): static
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(?int $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, MediaObject>
     */
    public function getMediaObject(): Collection
    {
        return $this->mediaObject;
    }

    public function addMediaObject(MediaObject $mediaObject): static
    {
        if (!$this->mediaObject->contains($mediaObject)) {
            $this->mediaObject->add($mediaObject);
            $mediaObject->setProduct($this);
        }

        return $this;
    }

    public function removeMediaObject(MediaObject $mediaObject): static
    {
        if ($this->mediaObject->removeElement($mediaObject)) {
            // set the owning side to null (unless already changed)
            if ($mediaObject->getProduct() === $this) {
                $mediaObject->setProduct(null);
            }
        }

        return $this;
    }
}