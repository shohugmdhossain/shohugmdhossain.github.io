---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Moderate vertical space between blocks (balanced look)
  spacing: '2rem'

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      css_class: hbx-bg-gradient no-top-space no-bottom-space
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <div style="text-align: justify; text-justify: inter-word;">
        My research explores Martian surface evolution through the integration of satellite remote sensing and artificial intelligence. I develop deep learning–based workflows to analyze geomorphological features that preserve evidence of past subsurface and sedimentary activity. Using advanced geospatial modeling and high-performance computing, this work aims to reveal patterns in Martian landscapes that contribute to understanding the planet’s geological and climatic history.
        <br><br>
        Please reach out to collaborate 😃
        </div>
    design:
      columns: '1'
      spacing:
        padding: [1, 0, 1, 0]  # light inner padding for breathing space

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
      spacing:
        padding: [1, 0, 1, 0]

  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
      spacing:
        padding: [1, 0, 1, 0]

  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
    design:
      view: card
      spacing:
        padding: [1, 0, 1, 0]

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 5
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [1, 0, 1, 0]
---
