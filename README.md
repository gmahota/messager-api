<h1>Messages API</h1>

<p>This is the documentation for the Messages API, which provides endpoints for managing messages.</p>

<h2>Table of Contents</h2>

<ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-endpoints">API Endpoints</a>
        <ul>
            <li><a href="#count-messages">Count Messages</a></li>
            <li><a href="#create-message">Create Message</a></li>
            <li><a href="#get-messages">Get Messages</a></li>
            <li><a href="#reset-messages">Reset Messages</a></li>
        </ul>
    </li>
</ul>

<h2 id="installation">Installation</h2>

<!-- Include installation instructions if needed -->

<h2 id="usage">Usage</h2>

<!-- Include usage instructions if needed -->

<h2 id="api-endpoints">API Endpoints</h2>

<h3 id="count-messages">Count Messages</h3>

<ul>
    <li><strong>Endpoint:</strong> <code>GET /messages/count</code></li>
    <li><strong>Description:</strong> Get the count of messages.</li>
</ul>

<h3 id="create-message">Create Message</h3>

<ul>
    <li><strong>Endpoint:</strong> <code>POST /message/create</code></li>
    <li><strong>Description:</strong> Create a new message.</li>
    <li><strong>Request Body Example:</strong>
        <pre><code>{
  "name": "John Doe",
  "cellphone": "123456789",
  "text": "Hello!",
  "message": "Important message content"
}</code></pre>
    </li>
    <li><strong>Response Example:</strong>
        <pre><code>{
  "_message": "Message created successfully"
}</code></pre>
    </li>
</ul>

<h3 id="get-messages">Get Messages</h3>

<ul>
    <li><strong>Endpoint:</strong> <code>GET /messages/:cellphone/:from</code></li>
    <li><strong>Description:</strong> Get messages based on cellphone and from.</li>
</ul>

<h3 id="reset-messages">Reset Messages</h3>

<ul>
    <li><strong>Endpoint:</strong> <code>POST /messages/:cellphone/:from/reset</code></li>
    <li><strong>Description:</strong> Reset messages based on cellphone and from.</li>
</ul>

</body>
</html>
