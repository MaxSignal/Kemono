const { shell, header, subheader } = require('../../../views/components');
const { sidebar } = require('./components');

const license = () => shell(`
  <div class="main">
    ${header({ currentPage: 'help' })}
    ${subheader({ currentPage: 'help' })}
    <div class="views">
      ${sidebar()}
      <div class="page" id="page">
        <h1>Open Source</h1>
        <p>
          This website is running <a href="https://github.com/OpenYiff/Kemono">Kemono,</a> which is provided for free under the BSD-3 License. Mirrors of the source code exist <a href="https://codeberg.org/OpenYiff/Kemono">here</a> and <a href="https://notabug.org/OpenYiff/Kemono">here.</a><br>
          <pre>
            <code>
Copyright 2020 kemono.party

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </code>
          </pre>
        </p>
      </div>
    </div>
  </div>
`);

module.exports = { license };
