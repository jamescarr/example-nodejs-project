Response = function(test_function) {
  var self = this
  self._data = ""
  self._headers = {}
  self.writeHead = function(status, headers) {
    self._headers = headers
    self._headers['status'] = status.toString()
  }
  self.write = function(data) {
    if (data) {
      self._data += data
    }
  }
  self.end = function(data, encoding) {
    self.write(data)
    test_function(self._headers, self._data)
  }
}

Request = function(method, url) {
  this.method = method
  this.url = url
}
