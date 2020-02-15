# Picture element

## Data example
```yaml
hero-image:
  source:
    - srcset: "http://placehold.it/1024x1024"
      media: "(min-width: 1024px)"
    - srcset: "http://placehold.it/768x768"
      media: "(min-width: 768px)"
  src: "http://placehold.it/375x375"
  alt: "Foo bar"
```

## Usage in Template
```hbs
\{{> general/{{name_sc}} hero-image class="hero-image" }}
```

## Static HTML result:
```html
<picture class="hero-image">
  <source srcset="http://placehold.it/1024x1024" media="(min-width: 1024px)">
  <source srcset="http://placehold.it/768x768" media="(min-width: 768px)">
  <img src="http://placehold.it/375x375" alt="Foo bar">
</picture>
```

## Properties
- data-object: Object
- class?: string

