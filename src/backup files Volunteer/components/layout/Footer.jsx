import React from 'react';


export default function Footer() {
    return (
        <>
        <footer id="main-footer" class="text-center p-4">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h5>Team Ment</h5>
                        <p>Copyright &copy; {(new Date().getFullYear())}</p>
                    </div>
                    <div class="col">
                        <h5>Quick Links</h5>
                        <a href="about.html" class="h6 text-info">About</a><br></br>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}